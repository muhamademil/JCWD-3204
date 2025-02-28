import { NextRequest, NextResponse } from "next/server";
import { axiosInstance } from "@/utils/api/products.api";

// -> untuk handle response, bisa menggunakan NextResponse bawaan dari Next
// -> untuk handle request, bisa memanfaatkan NextRequest bawaan dari Next

// Handle GET by Id Request -> untuk mengambil data detail suatu produk berdasarkan id dari database sumber makmur
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = await params

        // --- validasi untuk mengecek apakah id yang diminta, terdaftar di dalam database
        // Fetch all products
        const productId = await axiosInstance.get('/products');

        // Cek apakah ID ada dalam daftar produk
        const productExists = productId.data.some((product: { id: string }) => product.id === id);

        if (!productExists) {
            return NextResponse.json(
                { status: 400, message: "Product ID not found" },
                { status: 400 }
            );
        }

        // Kalau ID nya ada, lanjut tampilkan produk tersebut
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

// Handle PUT Request -> untuk update data produk dari database sumber makmur
export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params

        const productId = await axiosInstance.get('/products');

        // Cek apakah ID ada dalam daftar produk
        const productExists = productId.data.some((product: { id: string }) => product.id === id);

        if (!productExists) {
            return NextResponse.json(
                { status: 400, message: "Product ID not found" },
                { status: 400 }
            );
        }

        await axiosInstance.put(`/products/${id}`)
        return NextResponse.json({
            status: 201,
            message: 'Success update product data'
        })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Error updated data'
        })
    }
}

// Handle DELETE Request -> untuk hapus data produk dari database sumber makmur
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params

        const productId = await axiosInstance.get('/products');

        // Cek apakah ID ada dalam daftar produk
        const productExists = productId.data.some((product: { id: string }) => product.id === id);

        if (!productExists) {
            return NextResponse.json(
                { status: 400, message: "Product ID not found" },
                { status: 400 }
            );
        }

        await axiosInstance.delete(`/products/${id}`)
        return NextResponse.json({
            status: 201,
            message: 'Success delete product data'
        })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Error delete data'
        })
    }
}

