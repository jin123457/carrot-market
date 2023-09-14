import { useForm } from "react-hook-form";
import Button from "../../../components/button";
import Layout from "../../../components/layout";
import Input from "../../../components/input";

const Edit = () => {
    const { register } = useForm();
    return (
        <Layout title="나의 프로필 수정하기" hasTabBar canGoBack>
            <div className="py-10 px-4 space-y-4">
                <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 rounded-full bg-slate-400" />
                    <label
                        htmlFor="picture"
                        className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-dm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
                    >
                        Change photo
                        <input type="file" className="hidden" id="picture" accept="image/*" />
                    </label>
                </div>
                <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1">
                        <Input register={register("email")} label="email" type="email" name="email" />
                    </div>
                </div>
                <div className="space-y-1">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        phone number
                    </label>
                    <div className="mt-1">
                        <Input register={register("phone")} kind="phone" label="phone" type="number" name="phone" />
                    </div>
                </div>
                <Button title="Update profile" />
            </div>
        </Layout>
    );
};

export default Edit;
