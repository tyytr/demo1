package com.change.demo002.controller;

import ch.qos.logback.core.util.FileUtil;
import com.change.demo002.utils.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

/**
 * @Author: lijun
 * @Description:
 * @Date: Created in 下午3:55 18-2-8
 * @Modified By:
 */
@CrossOrigin
@Controller
public class ImageController {


    private static final Logger logger = LoggerFactory.getLogger(ImageController.class);

    /**
    * @Author: lijun
    * @Description: 实现文件上传
    */
    @CrossOrigin
    @PostMapping("/publishImg")
    public @ResponseBody String uploadImage(@RequestParam("file")MultipartFile file, HttpServletRequest request){


        String contentType = file.getContentType();

        String fileName = file.getOriginalFilename();

        String filePath = request.getSession().getServletContext().getRealPath("/ServiceImage/");

        System.out.println(contentType);
        System.out.println(filePath);
        System.out.println(fileName);
        try {
            FileUtils.uploadFile(file.getBytes(), filePath, fileName);
        } catch (Exception e) {
            // TODO: handle exception
        }
        //返回json
        return (filePath+fileName);

    }


}
