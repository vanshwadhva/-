document.addEventListener('DOMContentLoaded', () => {
    const guestBtn = document.getElementById('guest-pin-btn');
    const pinInput = document.getElementById('guest-pin');
  
    if (guestBtn && pinInput) {
      guestBtn.addEventListener('click', () => {
        const pin = pinInput.value;
        localStorage.setItem('guest_pin', pin);
        alert('Guest access granted.');
        window.location.href = "/dashboard";
      });
    }
  });