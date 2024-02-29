let placeholder = "https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg"

export const userCard = (user) => {
    return `
    <section class="p-5 rounded-lg text-center text-gray-500 max-w-sm bg-slate-50">
        <img src="${user?.image}" alt="Product" class="drop-shadow-md w-32 h-32 rounded-full object-cover mx-auto"/>
        <div class="text-sm mt-5">
            <a href="#" class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
                ${user?.firstName}  ${user?.lastName}
            </a>
        </div>

        <p class="mt-2 text-md text-gray-900 truncate">${user?.phone}</p>
        <p class="text-sm">${user?.email}</p>
        <div class="flex mt-4 justify-center">
            <a href="#" class="w-6 mx-1">
                <i class="fa-brands fa-square-x-twitter cursor-pointer text-gray-500 hover:text-indigo-600"></i>
            </a>
            <a href="#" class="w-6 mx-1">
                <i class="fa-brands fa-facebook cursor-pointer text-gray-500 hover:text-indigo-600"></i>
            </a>
            <a href="#" class="w-6 mx-1">
                <i class="fa-brands fa-youtube cursor-pointer text-gray-500 hover:text-indigo-600"></i>
            </a>
            <a href="#" class="w-6 mx-1">
                <i class="fa-brands fa-linkedin cursor-pointer text-gray-500 hover:text-indigo-600"></i>
            </a>
        </div>
    </section>
    `
}