'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {  Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
import React from 'react'
import { motion } from 'framer-motion'
import {  Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <div>
       <section id="contact" className="text-center bg-gray-500">
          <h2 className="text-3xl font-bold mb-4 pt-6 text-white">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to new opportunities and collaborations.
          </p>
          <div className="flex justify-center space-x-6 pb-10">
            {[
              { icon: Github, href: 'https://github.com/Siddhant-00', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/siddhant-jain-a5159425b/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:siddhantjain6810@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target='_blank'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <Icon className="h-6 w-6 text-gray-600" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </div>
        </section>
        </section>
    </div>
  )
}

export default Footer