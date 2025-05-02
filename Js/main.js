const gruh = [
	{
		name: 'Javascript gruhi',
		body: 'Frontend dasturlashni yaxshi ko‘radi va har kuni yangi narsa o‘rganadi.',
		count: '1',
		images: '../images/users.png',
		images1: '../images/ptichaka.png',
		online: true,
		test: false,
	},
	{
		name: 'Kiberxafsizlik gruhi',
		body: 'JavaScript va React bilan ishlashga qiziqadi.',
		count: '2',
		images: '../images/users.png',
		images1: '../images/ptichaka.png',
		online: true,
		test: false,
	},
	{
		name: 'Data analitika',
		body: 'UI/UX dizayn bilan shug‘ullanadi va Figma’dan faol foydalanadi.',
		count: '3',
		images: '../images/users.png',
		images1: '../images/ptichaka.png',
		online: false,
		test: true,
	},
	{
		name: 'Php gruhi',
		body: 'Backend sohasida PHP va Laravel’ni yaxshi biladi.',
		count: '4',
		images: '../images/users.png',
		images1: '../images/ptichaka.png',
		online: true,
		test: true,
	},
	{
		name: 'Front-end gruhi',
		body: 'Full-stack dasturchi bo‘lish uchun har kuni mashq qiladi.',
		count: '5',
		images: '../images/users.png',
		images1: '../images/ptichaka.png',
		online: false,
		test: false,
	},
	{
		name: 'Beck-end gruhi',
		body: 'Veb-saytlar uchun chiroyli dizayn yaratadi.',
		count: '6',
		images: '../images/users.png',
		images1: '../images/ptichaka.png',
		online: true,
		test: false,
	},
	{
		name: 'Web dezayn gruhu',
		body: 'Node.js va Express.js bilan server yaratishda tajribali.',
		count: '7',
		images: '../images/users.png',
		images1: '../images/ptichaka.png',
		online: true,
		test: true,
	},
	{
		name: 'Flutter gruhi',
		body: 'Har doim yangi texnologiyalarni o‘rganishga intiladi.',
		count: '8',
		images: '../images/users.png',
		images1: '../images/ptichaka.png',
		online: true,
		test: false,
	},
	{
		name: 'Java gruxi',
		body: 'Mobil ilovalar ishlab chiqishga katta qiziqishi bor.',
		count: '9',
		images: '../images/users.png',
		images1: '../images/ptichaka.png',
		online: false,
		test: true,
	},
	{
		name: 'Python gruxi',
		body: 'Tajriba orttirish uchun freelance loyihalarda ishtirok etadi.',
		count: '10',
		images: '../images/users.png',
		images1: '../images/ptichaka.png',
		online: true,
		test: false,
	},
]

document.addEventListener('DOMContentLoaded', () => {
	const gruhlar = document.getElementById('gruhlar')

	console.log(gruhlar)

	if (!gruhlar) {
		console.error('HTMLda #gruhlar topilmadi!')
		return
	}

	gruhlar.innerHTML = ''
	gruh.map(gruh => {
		gruhlar.innerHTML += `
  <div class="my-[28px] flex items-center cursor-pointer justify-between gap-[15px]">
    <div class="flex items-center gap-[15px]">
      <div class="relative">
        <img class="min-w-[70px] h-[70px] rounded-[30px]" src="${
					gruh?.images
				}" alt="users photos">
        ${
					gruh.online
						? `
          <div class="absolute bottom-[8px] right-[3px] w-[16px] h-[16px] rounded-full bg-[#2675EC] border-2 border-white"></div>
        `
						: ''
				}
      </div>
      <div>
        <p class="text-[#131313] text-[23px] max-[380px]:text-[18px] font-extrabold leading-[120%] max-[380px]:font-semibold font-['K2D']">${
					gruh?.name
				}</p>
        <p class="text-[#848484] leading-[120%] text-[16px] line-clamp-1 font-medium font-['Gilda Display']">${
					gruh?.body
				}</p>
      </div>
    </div>
    <div>
      ${
				!gruh.test === true
					? `<span
        class="px-[9px] py-[5px] max-[400px]:text-[13px] bg-[#2675EC] rounded-[20px] text-[#fff] font-medium font-['Gilroy Display']">${gruh?.count}</span>`
					: `<img class="min-w-[25px]" src="${gruh?.images1}" alt="">`
			}
    </div>
  </div>
`
	})
})
