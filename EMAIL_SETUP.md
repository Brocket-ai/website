# Email Setup Guide for Brocket.ai Landing Page

## Overview
The landing page now includes a fully functional email form that sends notifications to `hernanfinucci@gmail.com` when potential clients submit their email address.

## What's Been Implemented

### 1. Email Service Integration
- **Service**: Resend (reliable email service)
- **Package**: `resend` npm package installed
- **API Route**: `/app/api/contact/route.ts` handles form submissions

### 2. Form Enhancements
- **Validation**: Client-side and server-side email validation
- **State Management**: Loading states, success/error messages
- **User Experience**: Disabled form during submission, clear feedback

### 3. Email Template
The email sent to `hernanfinucci@gmail.com` includes:
- Contact's email address
- Timestamp (Argentina timezone)
- Professional HTML formatting
- Call-to-action for follow-up

## Setup Instructions

### Step 1: Get Resend API Key
1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

### Step 2: Configure Environment Variables
Create a `.env.local` file in the project root with:

```bash
RESEND_API_KEY=your_actual_resend_api_key_here
```

**Important**: Replace `your_actual_resend_api_key_here` with your real Resend API key.

### Step 3: Domain Configuration (Optional but Recommended)
For production, you should:
1. Verify your domain in Resend
2. Update the `from` field in the API route from `noreply@brocket.ai` to your verified domain

### Step 4: Test the Functionality
1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:3000`
3. Scroll to the contact section
4. Enter a test email and click "Contactar"
5. Check for success message and verify email in `hernanfinucci@gmail.com`

## File Changes Made

### New Files:
- `/app/api/contact/route.ts` - API endpoint for handling form submissions
- `/EMAIL_SETUP.md` - This setup guide

### Modified Files:
- `/app/page.tsx` - Updated contact form with proper state management and submission handling
- `/package.json` - Added `resend` dependency

## Features

### Form Validation
- ✅ Required email field
- ✅ Email format validation
- ✅ Prevents submission of empty/invalid emails

### User Experience
- ✅ Loading state during submission
- ✅ Success/error message display
- ✅ Form reset after successful submission
- ✅ Disabled state during processing

### Email Notifications
- ✅ Professional HTML email template
- ✅ Contact information clearly displayed
- ✅ Argentina timezone timestamps
- ✅ Call-to-action for follow-up

### Error Handling
- ✅ Graceful error handling for network issues
- ✅ Server-side validation
- ✅ User-friendly error messages in Spanish

## Production Deployment

When deploying to production:
1. Add the `RESEND_API_KEY` environment variable to your hosting platform
2. Consider setting up a custom domain in Resend for better deliverability
3. Monitor email delivery in the Resend dashboard

## Troubleshooting

### Common Issues:
1. **"Failed to send email"**: Check that `RESEND_API_KEY` is set correctly
2. **Form not submitting**: Check browser console for errors
3. **Emails not arriving**: Verify the Resend API key and check spam folder

### Testing in Development:
- Use a real email address for testing
- Check Resend dashboard for delivery status
- Monitor Next.js console for server logs

## Cost Considerations
- Resend free tier: 3,000 emails/month
- Paid plans start at $20/month for 50,000 emails
- Perfect for startup/small business use cases

## Security Notes
- Environment variables are secure and not exposed to client-side
- Email validation prevents basic spam/invalid submissions
- Consider adding rate limiting for production use
