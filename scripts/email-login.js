document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-action="signup"]').forEach(button => {
      button.addEventListener('click', async () => {
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const { data: signUpData, error } = await supabase.auth.signUp({ email, password });
        if (error) return alert(error.message);
        alert('Signup successful. Check your email to confirm.');
      });
    });
  
    document.querySelectorAll('[data-action="login"]').forEach(button => {
      button.addEventListener('click', async () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) return alert(error.message);
        alert('Login successful!');
        window.location.href = "/dashboard";
      });
    });
  });