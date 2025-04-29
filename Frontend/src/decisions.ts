export const decisions = [
    {
        title: "Send an SMS",
        data: {
            type: "SendSMS",
            phoneNumber: "+1234567890"
        }
    },
    {
        title: "Send an Email",
        data: {
            type: "SendEmail",
            from: "admin@example.com",
            to: "user@example.com"
        }        
    },
    {
        title: "Condition: If today is Jan 1st, 2025 → Send SMS, else send Emai",
        data: {
            type: "Condition",
            expression: "new Date().toISOString().startsWith('2025-01-01')",
            trueAction: {
                type: "SendSMS",
                phoneNumber: "+1234567890"
            },
            falseAction: {
                type: "SendEmail",
                from: "info@example.com",
                to: "fallback@example.com"
            }
        }                

    },
    {
        title: "Loop: Send an SMS 3 times",
        data: {
            type: "Loop",
            iterations: 3,
            action: {
                type: "SendSMS",
                phoneNumber: "+1122334455"
            }
        }              
    },
    {
        title: "Send 5 optional SMS based on context variable",
        data: {
            type: "Loop",
            iterations: 5,
            action: {
                type: "Condition",
                expression: "context.shouldSend",
                trueAction: {
                    type: "SendSMS",
                    phoneNumber: "+1999888777"
                },
                falseAction: {
                    type: "SendEmail",
                    from: "skip@example.com",
                    to: "log@example.com"
                }
            }
        }          

    },

];