import { NextResponse } from "next/server";
import { axiosInstance } from "@/utils/api/products.api";

// -> untuk handle response, bisa menggunakan NextResponse (fitur bawaan dari Next.js) atau Response (bawaan dari Node.js)
// -> untuk handle request, bisa memanfaatkan Request dari node.js langsung

// Handle GET Request -> untuk mengambil data produk dari database sumber makmur
export async function GET() {
    try {
        const response = await axiosInstance.get('/products')
        return NextResponse.json(
            {
                status: 200,
                data: response.data
            }

        )
    } catch (error) {
        return NextResponse.json({
            status: 500,
            data: 'Error fetching data',
            detail: error
        })
    }
}

// Handle POST Request -> untuk membuat data produk ke database sumber makmur
export async function POST(req: Request) {
    try {
        await axiosInstance.post('/products', req.body)
        return NextResponse.json({
            status: 201,
            message: 'Success create data product'
        })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Error create data',
            detail: error
        })
    }
}
