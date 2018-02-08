package com.change.demo002.utils;

import java.io.File;
import java.io.FileOutputStream;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Created in 下午4:03 18-2-8
 * @Modified By:
 */
public class FileUtils {

    public static void uploadFile(byte[] file, String filePath, String fileName) throws Exception {
        File targetFile = new File(filePath);
        if(!targetFile.exists()){
            targetFile.mkdirs();
        }
        FileOutputStream out = new FileOutputStream(filePath+fileName);
        out.write(file);
        out.flush();
        out.close();
    }


}
