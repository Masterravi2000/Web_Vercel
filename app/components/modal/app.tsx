'use client'

import { useState, useCallback } from 'react'

interface JoinWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinWaitlistModal({ isOpen, onClose }: JoinWaitlistModalProps) {
  const [waitingemail, setWaitingEmail] = useState('')
  const [user, setUser] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const validateEmail = useCallback((email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }, [])

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setWaitingEmail(newEmail)
    setIsValidEmail(validateEmail(newEmail))
  }, [validateEmail])

  const handleUserChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value)
  }, [])

  const handleSubmit = useCallback(async () => {
    if (isValidEmail && user) {
      setIsLoading(true)
      setError(null)
      setSuccess(false)

      try {
        const response = await fetch('/api/mail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ waitingemail, user }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || 'Failed to submit.')
        }

        setSuccess(true)
        setWaitingEmail('')
        setUser('')
        onClose()
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unknown error occurred.')
        }
      } finally {
        setIsLoading(false)
      }
    }
  }, [waitingemail, isValidEmail, user, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100] p-2">
      <div className="bg-[#161616] rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl text-white font-semibold mb-4">Join the Waitlist</h2>
        <p className="mb-4 text-white">
          Sign up to be among the first to join our community. Enter your details below to get started!
        </p>

        {/* User name input field */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Your name"
            className="border text-white border-1 bg-[#161616] rounded-lg p-2 w-full focus:ring-2 focus:outline-none"
            value={user}
            onChange={handleUserChange}
          />
        </div>

        <div className="relative mb-4">
          <input
            type="email"
            placeholder="Your email"
            className={`border text-white border-1 ${
              waitingemail && !isValidEmail ? 'border-red-500' : 'border-white'
            } bg-[#161616] rounded-lg p-2 w-full ${
              waitingemail && !isValidEmail ? 'focus:ring-red-500' : 'focus:ring-white'
            } focus:ring-2 focus:outline-none`}
            value={waitingemail}
            onChange={handleEmailChange}
          />
          {waitingemail && !isValidEmail && (
            <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
          )}
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          {success && <p className="text-green-500 text-sm mt-1">Email submitted successfully!</p>}
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#161616] border-white text-white rounded px-4 py-2 mr-2"
          >
            Close
          </button>
          <button 
            onClick={handleSubmit}
            className={`bg-[#12956B] text-white rounded px-4 py-2 ${
              !isValidEmail || !user || isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!isValidEmail || !user || isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  )
}
