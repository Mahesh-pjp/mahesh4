// Create twinkling stars
const starContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  starContainer.appendChild(star);
}

// Display special message
function displayMessage() {
  const message = document.createElement('div');
  message.style.position = 'fixed';
  message.style.top = '50%';
  message.style.left = '50%';
  message.style.transform = 'translate(-50%, -50%)';
  message.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  message.style.padding = '20px';
  message.style.borderRadius = '10px';
  message.style.color = 'white';
  message.innerHTML = '<h3>Happy New Year jaan! hum dono ek dusre ka saath pasand h .. jub bhi saath baithte toh tum ghanto baithe rehte time ka pta hi ni lgta .. dono ko hi mn ni bharta h .. mujhe aap bohot pasand ho aur hamesha hi meri pasand rahoge .. hamare beech kaafi misunderstaing hui pta ni kya h time saath ni hamare ...lekin mujhpe bharosa rakho sab shi ho jaige.. kya hum ess new year ke saath ek new start bhi de iss relationship ko .. rules bnate h saath milke ki kya krna h kya ni krna kb milna h kb ni ek dusre ko aur samjhte h .. please na jaan</h3>';
  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 50000);
}
