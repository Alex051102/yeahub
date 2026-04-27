

import { createBrowserRouter, Navigate } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'

import {ROUTES} from '@/shared/config/routes'
import { lazy, Suspense } from 'react'

import QuestionsPageSkeleton from '@/pages/question-list/ui/QuestionsPageSkeleton'
import QuestionDeatailPageSkeleton from '@/pages/question-deatail/ui/QuestionDeatailPageSkeleton'
import ErrorPage from '@/shared/ui/ErrorPage/ErrorPage'

const QuestionsPage = lazy(() => import('@/pages/question-list'))
const QuestionDetailPage = lazy(() => import('@/pages/question-deatail'))
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
					<Suspense fallback={<QuestionsPageSkeleton />}>  
            			<QuestionsPage />
          			</Suspense> 
						
					
				)
				
			},
			{
				path: ROUTES.QUESTION_DETAIL,
				element: (
					<Suspense fallback={<QuestionDeatailPageSkeleton/>}>
						<QuestionDetailPage/>
						
					</Suspense>
					
					
				)
				
			},
			{
  path: '*',
  element: (
    
      <ErrorPage errorMessage='Страница не найдена'></ErrorPage>
    
  ),
}
			
			
			
		]
	}
])
