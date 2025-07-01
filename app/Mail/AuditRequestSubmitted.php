<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class AuditRequestSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public array $formData;
    public array $auditResults;

    /**
     * Create a new message instance.
     */
    public function __construct(array $formData, array $auditResults)
    {
        $this->formData = $formData;
        $this->auditResults = $auditResults;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Systems Audit Request - GPDS',
            replyTo: $this->formData['email']
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.audit-request-submitted',
            with: [
                'formData' => $this->formData,
                'auditResults' => $this->auditResults
            ]
        );
    }
}
