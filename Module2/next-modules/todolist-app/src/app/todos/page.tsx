import React from 'react'
import TodoForm from '@/components/atomics/todo-form/todo-form.module'
import TodoList from '@/components/molecules/todo-list/todo-list.module'
import Layout from '@/components/molecules/layout/layout.module'

export default function Todos() {
  return (
    <Layout>
      <div className='flex flex-col gap-y-5 text-black justify-center items-center'>
        <h1 className='text-2xl font-semibold text-center mb-4'>To Do List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Layout>
  )
}
