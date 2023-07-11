import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DiaryHomePage, DiaryDetailPage, DiaryEmotionLinkPage, DiaryEmotionPage } from '../app'

export type DiaryRouterPath = '/' | `/detail/${string}` | '/emotions' | `/emotions/${string}`
const diaryRouter = createBrowserRouter([
    {
        path: '/',
        element: <DiaryHomePage />,
    },
    {
        path: '/detail/:id',
        element: <DiaryDetailPage />,
    },
    {
        path: '/emotions',
        element: <DiaryEmotionLinkPage />,
    },
    {
        path: '/emotions/:emotion',
        element: <DiaryEmotionPage />,
    },
])

export const DiaryRouter = () => <RouterProvider router={diaryRouter} />
