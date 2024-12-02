import { NowRequest, NowResponse } from '@vercel/node';

// Este sería el "endpoint" en el servidor frontend de Nuxt para devolver datos de ejemplo de tareas.
export default async (req: NowRequest, res: NowResponse) => {
 if (req.method === 'GET') {
// Datos de ejemplo de tareas
const tasks = [
 { id: 1, title: 'Tarea de ejemplo 1',completed:false },
 { id: 2, title: 'Tarea de ejemplo 2',completed:true },
 { id: 3, title: 'Tarea de ejemplo 3',completed:false },
 ];

 res.status(200).json(tasks);
 } else {
 res.setHeader('Allow', ['GET']);
 res.status(405).end(`Method ${req.method} Not Allowed`);
}
};