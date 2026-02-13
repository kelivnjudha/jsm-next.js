const Page = async ({params} : {params: Promise<{id: string}>}) => {

    const {id} = await params;

    return (
        <div className={'text-green-500'}>
            User {id} Page
        </div>
    )
}

export default Page;