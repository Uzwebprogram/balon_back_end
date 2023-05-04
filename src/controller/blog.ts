import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { BlogEntity } from '../entities/blog';

class BlogController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(BlogEntity ).find());
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        res.json(await AppDataSource.getRepository(BlogEntity ).find({where: { id: +id }}));
    }

    public async Post(req: Request, res: Response) {
        try {
            const { title_uz,title_ru , title_en , link } = req.body

            const category = await AppDataSource.getRepository(BlogEntity ).createQueryBuilder().insert().into(BlogEntity ).values({ title_uz,title_ru , title_en , link }).returning("*").execute()

            res.json({
                status: 201,
                message: "category created",
                data: category.raw[0]
            })
        } catch (error) {
            console.log(error);
        }

    }

    public async Put(req: Request, res: Response) {
        try {
            const { title_uz,title_ru , title_en , link  } = req.body
            const { id } = req.params

            const category = await AppDataSource.getRepository(BlogEntity ).createQueryBuilder().update(BlogEntity )
                .set({ title_uz,title_ru , title_en , link  })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "category updated",
                data: category.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const category = await AppDataSource.getRepository(BlogEntity ).createQueryBuilder().delete().from(BlogEntity ).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "category deleted",
                data: category.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new BlogController();