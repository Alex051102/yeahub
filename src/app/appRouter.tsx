

import { createBrowserRouter, Navigate } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import QuestionsPage from '../pages/questionList/QuestionsPage'
import QuestionDeatail from '@/pages/questionDeatail/QuestionDeatailPage'



export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout/>,
		children: [
			{
				index: true,
				element: (
					<Navigate
						to='/questions'
						replace
					/>
				)
			},
			{
				path: '/questions',
				element: (
					<QuestionsPage/>
						
					
				)
				
			},
			{
				path: '/questions/:id',
				element: (
					<QuestionDeatail/>
						
					
				)
				
			},
			
			
			
		]
	}
])
