document.querySelectorAll('input[name="location"]').forEach(input=>input.addEventListener('change',()=>{
  const choice=input.value;
  document.getElementById('choice-status').textContent=`Ваш выбор: ${choice}. Общая стоимость — 4 940 000 ₽. Выбор нужно подтвердить с менеджером.`;
  document.querySelectorAll('.choice').forEach(card=>{card.querySelector('.select-label').textContent=card.querySelector('input').checked?'Выбрано':'Выбрать локацию';});
  const subject='Персональное закрытие парка 17.11.2026';
  const body=`Здравствуйте! Хотим обсудить предложение на 17 ноября 2026 года, 18:00–22:00. Выбранная тематическая локация: ${choice}. Стоимость пакета: 4 940 000 ₽. Просим подтвердить условия проведения.`;
  document.getElementById('discuss').href=`mailto:event@parkskazka.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}));