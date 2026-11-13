
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open'));});}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
const form=document.querySelector('#enquiry-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent('Website enquiry - CINEX NETWORKS');const body=encodeURIComponent(`Name: ${data.get('name')}\\nEmail: ${data.get('email')}\\nPhone: ${data.get('phone')}\\nService: ${data.get('service')}\\n\\nMessage:\\n${data.get('message')}`);const email=form.dataset.email;if(!email||email.includes('YOUR_')){alert('Please configure your company email address in contact.html before publishing.');return;}window.location.href=`mailto:${email}?subject=${subject}&body=${body}`;});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
