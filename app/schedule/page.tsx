"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input"

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const meetingTypes = [
    {
        id: "initial",
        title: "Initial Consultation",
        duration: "30 minutes",
        description: "Discuss your project requirements and get a free consultation",
        icon: "💬"
    },
    {
        id: "technical",
        title: "Technical Discussion",
        duration: "45 minutes",
        description: "Deep dive into technical requirements and architecture",
        icon: "⚙️"
    },
    {
        id: "project",
        title: "Project Planning",
        duration: "60 minutes",
        description: "Detailed project planning and timeline discussion",
        icon: "📋"
    }
]

const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM"
]

export default function SchedulePage() {
    const [selectedType, setSelectedType] = useState("")
    const [selectedDate, setSelectedDate] = useState("")
    const [selectedTime, setSelectedTime] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [step, setStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/schedule', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    meetingType: selectedType,
                    date: selectedDate,
                    time: selectedTime,
                    email,
                    name,
                }),
            })

            if (!response.ok) {
                throw new Error('Failed to schedule meeting')
            }

            toast({
                title: "Meeting Scheduled",
                description: "Your meeting has been scheduled successfully. We'll send you a confirmation email shortly.",
            })

            setStep(4)
        } catch (error) {
            toast({
                title: "Error",
                description: "There was an error scheduling your meeting. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div variants={fadeInUp} className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">Select Meeting Type</h2>
                            <p className="text-zinc-500">Choose the type of meeting that best suits your needs</p>
                        </div>
                        <RadioGroup
                            value={selectedType}
                            onValueChange={setSelectedType}
                            className="grid gap-4"
                        >
                            {meetingTypes.map((type) => (
                                <motion.div
                                    key={type.id}
                                    variants={fadeInUp}
                                    className={`flex items-start space-x-4 p-4 rounded-lg border transition-all duration-300 ${selectedType === type.id
                                        ? 'border-zinc-900 bg-zinc-50'
                                        : 'border-zinc-200 hover:border-zinc-300'
                                        }`}
                                >
                                    <RadioGroupItem value={type.id} id={type.id} />
                                    <Label htmlFor={type.id} className="flex flex-col flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl">{type.icon}</span>
                                            <span className="font-medium">{type.title}</span>
                                        </div>
                                        <span className="text-sm text-zinc-500 mt-1">{type.duration}</span>
                                        <span className="text-sm text-zinc-500 mt-1">{type.description}</span>
                                    </Label>
                                </motion.div>
                            ))}
                        </RadioGroup>
                        <Button
                            onClick={() => setStep(2)}
                            disabled={!selectedType}
                            className="w-full group"
                        >
                            Next: Select Date
                            <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                )
            case 2:
                return (
                    <motion.div variants={fadeInUp} className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">Select Date</h2>
                            <p className="text-zinc-500">Choose a date for your meeting</p>
                        </div>
                        <div className="grid grid-cols-7 gap-2 sm:gap-4">
                            {Array.from({ length: 7 }, (_, i) => {
                                const date = new Date()
                                date.setDate(date.getDate() + i)
                                const dateString = date.toISOString().split('T')[0]
                                const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
                                const dayNumber = date.getDate()
                                const isToday = i === 0

                                return (
                                    <motion.div
                                        key={dateString}
                                        variants={fadeInUp}
                                        className={`p-3 sm:p-4 text-center rounded-lg cursor-pointer transition-all duration-300 ${selectedDate === dateString
                                            ? 'bg-zinc-900 text-white shadow-lg'
                                            : isToday
                                                ? 'bg-zinc-100 border-2 border-zinc-900'
                                                : 'bg-zinc-50 hover:bg-zinc-100'
                                            }`}
                                        onClick={() => setSelectedDate(dateString)}
                                    >
                                        <div className="text-xs sm:text-sm font-medium">{dayName}</div>
                                        <div className="text-lg sm:text-xl font-bold mt-1">{dayNumber}</div>
                                        {isToday && (
                                            <div className="text-[10px] sm:text-xs text-zinc-500 mt-1">Today</div>
                                        )}
                                    </motion.div>
                                )
                            })}
                        </div>
                        <div className="flex gap-4">
                            <Button
                                variant="outline"
                                onClick={() => setStep(1)}
                                className="flex-1 group"
                            >
                                <ChevronLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                Back
                            </Button>
                            <Button
                                onClick={() => setStep(3)}
                                disabled={!selectedDate}
                                className="flex-1 group"
                            >
                                Next: Select Time
                                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </motion.div>
                )
            case 3:
                return (
                    <motion.div variants={fadeInUp} className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">Select Time</h2>
                            <p className="text-zinc-500">Choose a time slot for your meeting</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                            {timeSlots.map((time) => (
                                <motion.div
                                    key={time}
                                    variants={fadeInUp}
                                    className={`p-3 text-center rounded-lg cursor-pointer transition-all duration-300 ${selectedTime === time
                                        ? 'bg-zinc-900 text-white shadow-lg'
                                        : 'bg-zinc-50 hover:bg-zinc-100'
                                        }`}
                                    onClick={() => setSelectedTime(time)}
                                >
                                    {time}
                                </motion.div>
                            ))}
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Smith"
                                    required
                                    className="transition-all duration-300 focus:ring-2 focus:ring-zinc-900"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john@example.com"
                                    required
                                    className="transition-all duration-300 focus:ring-2 focus:ring-zinc-900"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button
                                variant="outline"
                                onClick={() => setStep(2)}
                                className="flex-1 group"
                            >
                                <ChevronLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                Back
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                disabled={!selectedTime || !email || !name || isSubmitting}
                                className="flex-1 group"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Scheduling...
                                    </span>
                                ) : (
                                    <>
                                        Schedule Meeting
                                        <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </motion.div>
                )
            case 4:
                return (
                    <motion.div
                        variants={fadeInUp}
                        className="text-center space-y-8"
                    >
                        <div className="space-y-4">
                            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
                            <h2 className="text-2xl font-bold">Meeting Scheduled!</h2>
                            <div className="space-y-2">
                                <p className="text-zinc-500">
                                    Your {meetingTypes.find(t => t.id === selectedType)?.title} meeting has been scheduled for {selectedDate} at {selectedTime}.
                                </p>
                                <p className="text-zinc-500">
                                    We've sent a confirmation email with the meeting details and calendar invite.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setSelectedType("")
                                    setSelectedDate("")
                                    setSelectedTime("")
                                    setEmail("")
                                    setName("")
                                    setStep(1)
                                }}
                                className="flex-1 group"
                            >
                                Schedule Another Meeting
                                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                            <Link href="/" className="flex-1">
                                <Button className="w-full group">
                                    Back to Home
                                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-zinc-800 text-white"
            >
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        {/* <Link href="/contact" className="self-start">
                            <Button variant="ghost" className="text-white hover:text-zinc-200">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Contact
                            </Button>
                        </Link> */}
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Schedule a Meeting
                            </h1>
                            <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Choose a time that works best for you to discuss your project
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Main Content */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="w-full py-12 md:py-24 lg:py-32 bg-white"
            >
                <div className="container px-4 md:px-6">
                    <div className="max-w-2xl mx-auto">
                        <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300">
                            <CardContent className="p-6 sm:p-8">
                                {renderStep()}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </motion.section>
        </div>
    )
} 