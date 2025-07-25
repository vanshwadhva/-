document.addEventListener('DOMContentLoaded', () => {
    const bluetoothBtn = document.getElementById('bluetooth-pair-btn');
  
    if (bluetoothBtn) {
      bluetoothBtn.addEventListener('click', async () => {
        try {
          const device = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
          });
          localStorage.setItem('paired_device_name', device.name || 'Unknown');
          alert(`Device ${device.name} connected via Bluetooth.`);
          window.location.href = "/dashboard";
        } catch (err) {
          alert('Bluetooth pairing failed: ' + err.message);
        }
      });
    }
  });