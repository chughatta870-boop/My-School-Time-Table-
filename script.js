function generateTimetable() {
  const className = document.getElementById('classSelect').value;
  const teacherName = document.getElementById('teacherName').value;
  const schoolName = document.getElementById('schoolName').value;
  
  if(!className) {
    alert('کلاس سلیکٹ کریں!');
    return;
  }
  
  const days = ['پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
  const periods = ['پہلا پیریڈ', 'دوسرا پیریڈ', 'تیسرا پیریڈ', 'چوتھا پیریڈ', 'پانچواں پیریڈ', 'چھٹا پیریڈ', 'ساتواں پیریڈ'];
  
  let subjects = {
    '6th': ['اردو', 'انگلش', 'ریاضی', 'سائنس', 'اسلامیات', 'سوشل سٹڈیز', 'کمپیوٹر'],
    '7th': ['اردو', 'انگلش', 'ریاضی', 'سائنس', 'اسلامیات', 'جغرافیہ', 'کمپیوٹر'],
    '8th': ['اردو', 'انگلش', 'ریاضی', 'فزکس', 'کیمسٹری', 'بایولوجی', 'اسلامیات'],
    '9th': ['اردو', 'انگلش', 'ریاضی', 'فزکس', 'کیمسٹری', 'بایولوجی', 'پاک سٹڈیز'],
    '10th': ['اردو', 'انگلش', 'ریاضی', 'فزکس', 'کیمسٹری', 'بایولوجی', 'کمپیوٹر']
  };
  
  let html = `<div class="header-info">
    <h2>${schoolName}</h2>
    <h3>کلاس ${className} کا ٹائم ٹیبل</h3>
    <p>کلاس ٹیچر: ${teacherName}</p>
  </div>`;
  
  html += '<table><tr><th>دن / پیریڈ</th>';
  periods.forEach(p => html += `<th>${p}</th>`);
  html += '</tr>';
  
  days.forEach(day => {
    html += `<tr><td><b>${day}</b></td>`;
    let classSubjects = subjects[className];
    for(let i = 0; i < 7; i++) {
      let subj = classSubjects[Math.floor(Math.random() * classSubjects.length)];
      html += `<td>${subj}</td>`;
    }
    html += '</tr>';
  });
  
  html += '</table>';
  
  document.getElementById('timetable').innerHTML = html;
  document.getElementById('printBtn').style.display = 'block';
}

function printTimetable() {
  window.print();
}
