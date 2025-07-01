<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        .header { background: #3B82F6; color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #333; }
        .value { color: #666; margin-top: 5px; }
        .highlight { background: #EBF8FF; padding: 15px; border-radius: 5px; border-left: 4px solid #3B82F6; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🧱 New Contact Form Submission</h1>
            <p>Someone reached out through the GPDS website</p>
        </div>

        <div class="field">
            <div class="label">Name:</div>
            <div class="value">{{ $formData['name'] }}</div>
        </div>

        <div class="field">
            <div class="label">Email:</div>
            <div class="value">{{ $formData['email'] }}</div>
        </div>

        @if(isset($formData['company']) && $formData['company'])
        <div class="field">
            <div class="label">Company:</div>
            <div class="value">{{ $formData['company'] }}</div>
        </div>
        @endif

        @if(isset($formData['interest']) && $formData['interest'])
        <div class="field">
            <div class="label">Interest:</div>
            <div class="value">{{ ucfirst(str_replace('_', ' ', $formData['interest'])) }}</div>
        </div>
        @endif

        <div class="field">
            <div class="label">Message:</div>
            <div class="value">{{ $formData['message'] }}</div>
        </div>

        <div class="highlight">
            <strong>Action Required:</strong> Respond to this inquiry within 24 hours for best results!
        </div>
    </div>
</body>
</html>
