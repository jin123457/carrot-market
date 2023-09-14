import { useForm } from "react-hook-form";
import Button from "../../../components/button";
import Input from "../../../components/input";
import Layout from "../../../components/layout";

const Upload = () => {
    const { register } = useForm();
    return (
        <Layout title="캐럿에 상품 올리기" hasTabBar canGoBack>
            <div className="px-4 space-y-5 py-10">
                <div>
                    <label className="w-full cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
                        <svg className="h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <input className="hidden" type="file" />
                    </label>
                </div>
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
                <Button title="Upload item" />
            </div>
        </Layout>
    );
};

export default Upload;
