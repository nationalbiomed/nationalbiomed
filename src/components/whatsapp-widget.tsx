'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from 'next/image'

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '+9779841242752'
  
  const handleStartChat = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* WhatsApp Icon Button */}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-8 w-8 text-white" />
        ) : (
          <img src='/whatsapp.gif' className='rounded-full'/>
        )}
      </Button>

      {/* Chat Popup */}
      {isOpen && (
        <Card className="absolute bottom-20 left-0 w-[300px] md:w-[400px] shadow-xl">
          <CardHeader className="bg-[#075E54] text-white p-4 flex flex-row items-center space-y-0">
            <div className="flex items-center gap-3 flex-1">
              <div className="relative h-10 w-10  overflow-hidden">
                <Image
                  src="/nationallogo.png"
                  alt="Company Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold">National BIomedical Suppliers</h3>
                <p className="text-xs opacity-90">Typically replies in minutes</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 bg-[#ECE5DD]">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="font-medium mb-2">Hello and Namaste everyone!</p>
              <p className="text-sm text-muted-foreground">
                Welcome to National BIomedical Suppliers. How can we help you today?
              </p>
            </div>
          </CardContent>
          <CardFooter className="p-4 bg-white">
            <Button 
              className="w-full bg-[#25D366] hover:bg-[#20ba59]"
              onClick={handleStartChat}
            >
              Start Chat
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

