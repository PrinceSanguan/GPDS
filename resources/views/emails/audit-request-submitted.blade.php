<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Systems Audit Request</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        .header { background: #3B82F6; color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #333; }
        .value { color: #666; margin-top: 5px; }
        .score { background: #10B981; color: white; padding: 10px; border-radius: 5px; text-align: center; font-size: 24px; font-weight: bold; }
        .urgency-high { background: #EF4444; }
        .urgency-medium { background: #F59E0B; }
        .urgency-low { background: #10B981; }
        .recommendations { background: #FEF3C7; padding: 15px; border-radius: 5px; border-left: 4px solid #F59E0B; }
        .kit-recommendation { background: #EBF8FF; padding: 15px; border-radius: 5px; border-left: 4px solid #3B82F6; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📊 New Systems Audit Request</h1>
            <p>High-potential lead with completed assessment</p>
        </div>

        <h2>Contact Information</h2>
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

        @if(isset($formData['phone']) && $formData['phone'])
        <div class="field">
            <div class="label">Phone:</div>
            <div class="value">{{ $formData['phone'] }}</div>
        </div>
        @endif

        <h2>Audit Results</h2>
        <div class="score urgency-{{ $auditResults['urgency'] }}">
            Audit Score: {{ $auditResults['score'] }}/30
            <br><small>{{ ucfirst($auditResults['urgency']) }} Priority</small>
        </div>

        <h3>Business Profile</h3>
        <div class="field">
            <div class="label">Business Type:</div>
            <div class="value">{{ ucfirst(str_replace('_', ' ', $formData['business_type'])) }}</div>
        </div>

        <div class="field">
            <div class="label">Current Revenue:</div>
            <div class="value">{{ ucfirst(str_replace('_', ' ', $formData['current_revenue'])) }}</div>
        </div>

        <div class="field">
            <div class="label">Biggest Challenge:</div>
            <div class="value">{{ ucfirst(str_replace('_', ' ', $formData['biggest_challenge'])) }}</div>
        </div>

        <div class="field">
            <div class="label">Current Tools:</div>
            <div class="value">{{ ucfirst(str_replace('_', ' ', $formData['current_tools'])) }}</div>
        </div>

        <div class="field">
            <div class="label">Time on Admin:</div>
            <div class="value">{{ ucfirst(str_replace('_', ' ', $formData['time_spent_admin'])) }}</div>
        </div>

        <div class="field">
            <div class="label">Automation Experience:</div>
            <div class="value">{{ ucfirst(str_replace('_', ' ', $formData['automation_experience'])) }}</div>
        </div>

        @if(isset($formData['additional_info']) && $formData['additional_info'])
        <div class="field">
            <div class="label">Additional Information:</div>
            <div class="value">{{ $formData['additional_info'] }}</div>
        </div>
        @endif

        <h3>Opportunity Analysis</h3>
        <div class="recommendations">
            <h4>Key Recommendations:</h4>
            <ul>
                @foreach($auditResults['recommendations'] as $recommendation)
                <li>{{ $recommendation }}</li>
                @endforeach
            </ul>
        </div>

        <div class="kit-recommendation">
            <h4>Recommended Kit:</h4>
            <strong>{{ $auditResults['recommended_kit']['title'] }}</strong>
            <p>{{ $auditResults['recommended_kit']['reason'] }}</p>
        </div>

        <h3>Projected Impact</h3>
        <div class="field">
            <div class="label">Estimated Time Savings:</div>
            <div class="value">{{ $auditResults['estimated_time_savings'] }}</div>
        </div>

        <div class="field">
            <div class="label">Estimated Revenue Increase:</div>
            <div class="value">{{ $auditResults['estimated_revenue_increase'] }}</div>
        </div>

        <div class="recommendations">
            <strong>Next Steps:</strong> This is a {{ $auditResults['urgency'] }}-priority lead. 
            @if($auditResults['urgency'] === 'high')
            Reach out within 2 hours for maximum conversion potential.
            @elseif($auditResults['urgency'] === 'medium')
            Contact within 24 hours while interest is hot.
            @else
            Follow up within 48 hours to nurture this opportunity.
            @endif
        </div>
    </div>
</body>
</html>
