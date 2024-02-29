let placeholder = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"

export const productCard = (product) => {
    return `
    <section class="w-72 bg-slate-50 hover:shadow-sm rounded-lg">
        <a href="#">
            <img src="${product?.thumbnail || placeholder}" alt="Product" class="h-80 w-72 object-cover rounded-t-lg"/>
            <div class="px-4 py-3 w-72 text-black">
                <div class="flex justify-between">
                    <span class="mr-3 capitalize text-xs">${product?.category || "Unknow"}</span>
                    <span class="mr-3 uppercase text-xs">${product?.brand || "Unknow"}</span>
                </div>
                <p class="text-lg font-bold truncate block capitalize">${product?.title || "Unknow"}</p>
                <p class="text-md truncate block">${product?.description || "Empty"}</p>
                
                <div class="flex items-center justify-between gap-3">
                    <p class="text-lg font-semibold cursor-auto my-3 text-indigo-500">${product?.price || 0}$</p>
                    <div class="flex justify-center items-center text-red-600">
                        <i class="fa-solid fa-arrow-down"></i>
                        <p class="text-lg font-semibold cursor-auto my-3">${product?.discountPercentage || 0}%</p>
                    </div>
                    <button class="flex items-center flex-row gap-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-slate-50 py-1 px-2 rounded">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </a>
      </section>
    `
}