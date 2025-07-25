document.addEventListener('DOMContentLoaded', async () => {
    const qrContainer = document.getElementById('qr-container');
    const { data, error } = await supabase.from('device_sessions').insert({ scanned: false }).select().single();
    const sessionId = data.id;
  
    const qrUrl = `${window.location.origin}/scan.html?token=${sessionId}`;
    qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrUrl)}&size=200x200" alt="Scan QR">`;
  
    const interval = setInterval(async () => {
      const { data: check, error: pollError } = await supabase.from('device_sessions').select('*').eq('id', sessionId).single();
      if (check?.scanned) {
        clearInterval(interval);
        alert("Device linked successfully.");
        window.location.href = "/dashboard";
      }
    }, 3000);
  });