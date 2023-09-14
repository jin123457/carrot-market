import { useForm } from "react-hook-form";
import Button from "../../../components/button";
import Input from "../../../components/input";
import Layout from "../../../components/layout";

const Create = () => {
    const { register } = useForm();
    return (
        <Layout title="스트리밍 시작하기" hasTabBar canGoBack>
            <div className=" space-y-5 py-10 px-4">
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="name">
                        Name
                    </label>
                    <Input register={register("name")} type="text" label="name" name="name" />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="price">
                        Price
                    </label>
                    <Input register={register("price")} kind="price" type="text" label="price" name="price" />
                </div>
                <div>
                    <label htmlFor="description" className="mb-1 block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
                        rows={4}
                    />
                </div>
                <Button title="Go live" />
            </div>
        </Layout>
    );
};

export default Create;
