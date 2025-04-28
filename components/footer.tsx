import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">optimusDev</h3>
            <p className="text-sm text-zinc-500">
              Transforming ideas into exceptional digital experiences through innovative web, mobile, and desktop
              solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/theoptimusdev" className="text-zinc-500 hover:text-zinc-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com/theoptimusdev" className="text-zinc-500 hover:text-zinc-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/theoptimusdev/" className="text-zinc-500 hover:text-zinc-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/company/theoptimusdev" className="text-zinc-500 hover:text-zinc-900">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <Link href="/services/web-development" className="hover:text-zinc-900">
                  Web Application Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="hover:text-zinc-900">
                  Mobile Application Development
                </Link>
              </li>
              <li>
                <Link href="/services/desktop-development" className="hover:text-zinc-900">
                  Desktop Application Development
                </Link>
              </li>
              {/* <li>
                <Link href="/services/ui-ux-design" className="hover:text-zinc-900">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="hover:text-zinc-900">
                  Digital Consulting
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <Link href="/about" className="hover:text-zinc-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-zinc-900">
                  Portfolio
                </Link>
              </li>
              {/* <li>
                <Link href="/careers" className="hover:text-zinc-900">
                  Careers
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="hover:text-zinc-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="space-y-2">
              <Card className="border-none shadow-sm">
                <CardContent className="p-4 flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-zinc-900 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-zinc-500">theoptimusdev23@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardContent className="p-4 flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-zinc-900 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-zinc-500">+91 87674 85746</p>
                    <p className="text-zinc-500">+91 72638 40533</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} optimusDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

