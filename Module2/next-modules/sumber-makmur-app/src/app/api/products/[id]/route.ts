import { NextRequest, NextResponse } from "next/server";
import { axiosInstance } from "@/utils/api/products.api";

// -> untuk handle response, bisa menggunakan NextResponse bawaan dari Next
// -> untuk handle request, bisa memanfaatkan NextRequest bawaan dari Next

// Handle GET Request -> untuk mengambil data detail suatu produk berdasarkan id dari database sumber makmur
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = await params

        if (!id) {
            return NextResponse.json({
                status: 400,
                message: "ID is required"
            })
        }

        const response = await axiosInstance.get(`/products/${id}`)
        return NextResponse.json({
            status: 200,
            data: response.data
        })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Error fetching data'
        })
    }
}

// Handle POST Request -> untuk membuat data produk ke database sumber makmur
export async function POST(req: Request) {
    try {

    } catch (error) {

    }
}
