document.addEventListener('DOMContentLoaded', () => {
    const otpBtn = document.getElementById('otp-login-btn');
    const phoneInput = document.getElementById('phone-number');
  
    if (otpBtn && phoneInput) {
      otpBtn.addEventListener('click', async () => {
        const phone = phoneInput.value;
        const { error } = await supabase.auth.signInWithOtp({ phone });
        if (error) return alert(error.message);
        alert('OTP sent to your phone.');
      });
    }
  
    const verifyBtn = document.getElementById('verify-otp-btn');
    const otpInput = document.getElementById('otp-code');
  
    if (verifyBtn && otpInput) {
      verifyBtn.addEventListener('click', async () => {
        const phone = phoneInput.value;
        const token = otpInput.value;
        const { error } = await supabase.auth.verifyOtp({ phone, token, type: 'sms' });
        if (error) return alert(error.message);
        alert('Login successful!');
        window.location.href = "/dashboard";
      });
    }
  });