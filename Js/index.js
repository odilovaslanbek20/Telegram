const usersData = [
  {
    name: 'Jamila',
    body: 'Frontend dasturlashni yaxshi ko‘radi va har kuni yangi narsa o‘rganadi.',
    count: '1',
    images: '../images/users.png',
  },
  {
    name: 'Shahzod',
    body: 'JavaScript va React bilan ishlashga qiziqadi.',
    count: '2',
    images: '../images/users.png',
  },
  {
    name: 'Malika',
    body: 'UI/UX dizayn bilan shug‘ullanadi va Figma’dan faol foydalanadi.',
    count: '3',
    images: '../images/users.png',
  },
  {
    name: 'Azamat',
    body: 'Backend sohasida PHP va Laravel’ni yaxshi biladi.',
    count: '4',
    images: '../images/users.png',
  },
  {
    name: 'Dilshod',
    body: 'Full-stack dasturchi bo‘lish uchun har kuni mashq qiladi.',
    count: '5',
    images: '../images/users.png',
  },
  {
    name: 'Sevinch',
    body: 'Veb-saytlar uchun chiroyli dizayn yaratadi.',
    count: '6',
    images: '../images/users.png',
  },
  {
    name: 'Rustam',
    body: 'Node.js va Express.js bilan server yaratishda tajribali.',
    count: '7',
    images: '../images/users.png',
  },
  {
    name: 'Zarina',
    body: 'Har doim yangi texnologiyalarni o‘rganishga intiladi.',
    count: '8',
    images: '../images/users.png',
  },
  {
    name: 'Bekzod',
    body: 'Mobil ilovalar ishlab chiqishga katta qiziqishi bor.',
    count: '9',
    images: '../images/users.png',
  },
  {
    name: 'Mohira',
    body: 'Tajriba orttirish uchun freelance loyihalarda ishtirok etadi.',
    count: '10',
    images: '../images/users.png',
  },
  {
    name: 'Farruh',
    body: 'React va Redux yordamida kuchli frontend yaratmoqda.',
    count: '11',
    images: '../images/users.png',
  },
  {
    name: 'Dildora',
    body: 'Kodlashni yoshligidan yaxshi ko‘radi.',
    count: '12',
    images: '../images/users.png',
  },
  {
    name: 'Olim',
    body: 'Java bilan Android ilovalar ishlab chiqadi.',
    count: '13',
    images: '../images/users.png',
  },
  {
    name: 'Madina',
    body: 'O‘z portfolio saytini yaratish ustida ishlamoqda.',
    count: '14',
    images: '../images/users.png',
  },
  {
    name: 'Bobur',
    body: 'Django yordamida kuchli backend tizimlar yaratadi.',
    count: '15',
    images: '../images/users.png',
  },
  {
    name: 'Nargiza',
    body: 'Grafik dizayn va animatsiya yaratishga qiziqadi.',
    count: '16',
    images: '../images/users.png',
  },
  {
    name: 'Alisher',
    body: 'Teamlead bo‘lishni orzu qiladi.',
    count: '17',
    images: '../images/users.png',
  },
  {
    name: 'Nigora',
    body: 'Har kuni yangi komponentlar yozib, Reactda mashq qiladi.',
    count: '18',
    images: '../images/users.png',
  },
  {
    name: 'Jasur',
    body: 'Texnik maqolalar o‘qishni va yozishni yaxshi ko‘radi.',
    count: '19',
    images: '../images/users.png',
  },
  {
    name: 'Kamola',
    body: 'Tillarni yaxshi biladi va ko‘p tilli saytlar yaratadi.',
    count: '20',
    images: '../images/users.png',
  },
];
	document.addEventListener('DOMContentLoaded', () => {
		const userCards = document.getElementById('users');
	
		if (!userCards) {
			console.error('HTMLda #users topilmadi!');
			return;
		}
	
		userCards.innerHTML = '';
		usersData.map((user) => {
			userCards.innerHTML += `
			 <div class="my-[28px] flex items-center cursor-pointer justify-between gap-[15px]">
						<div class="flex items-center gap-[15px]">
							<img class="w-[82px] rounded-[30px]" src="${user?.images}" alt="users photos">
							<div class="">
								<p class="text-[#131313] text-[23px] font-extrabold font-['K2D']">${user?.name}</p>
								<p class="text-[#848484] leading-[120%] text-[16px] line-clamp-1 font-medium font-['Gilda Display']">${user?.body}</p>
							</div>
						</div>
						<div class="">
							<span
								class="px-[9px] py-[5px] bg-[#2675EC] rounded-[20px] text-[#fff] font-medium font-['Gilroy Display']">${user?.count}</span>
						</div>
					</div>
			`; 
		});
	});
	