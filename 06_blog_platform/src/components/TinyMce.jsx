import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

const TinyMce = ({ name, control, defaultValue = "", rules }) => {
    return (
        <Controller
            name={name || "description"}
            control={control}
            rules={rules} // Validation rules, including error messages
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <>
                    <Editor
                        initialValue={defaultValue}
                        apiKey={import.meta.env.VITE_TINYMC_API_KEY}
                        value={value || ""} // Bind the value from react-hook-form
                        init={{
                            branding: false,
                            plugins: ["image", "advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "code", "help", "wordcount", "anchor", "fullscreen"],
                            toolbar: "undo redo fullscreen | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                            tinycomments_mode: "embedded",
                            tinycomments_author: "Mohd Sameer",
                            skin: "oxide-dark",
                            content_css: "dark",
                            max_height: 500,
                            min_height: 500,
                        }}
                        onEditorChange={onChange}
                    />
                    {error && <p className="font-semibold text-red-500">{error?.message}</p>}
                </>
            )}
        />
    );
};

export default TinyMce;
