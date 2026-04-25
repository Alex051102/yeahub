

import { createBrowserRouter, Navigate } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import QuestionsPage from '../pages/questionList/QuestionsPage'
import QuestionDeatail from '@/pages/questionDeatail/QuestionDeatailPage'
import {ROUTES} from '@/shared/config/routes'


export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout/>,
		children: [
			{
				index: true,
				element: (
					<Navigate
						to={`${ROUTES.QUESTIONS}`}
						replace
					/>
				)
			},
			{
				path: ROUTES.QUESTIONS,
				element: (
					<QuestionsPage/>
						
					
				)
				
			},
			{
				path: ROUTES.QUESTION_DETAIL,
				element: (
					<QuestionDeatail/>
						
					
				)
				
			},
			
			
			
		]
	}
])
