package com.change.demo002.controller;

import ch.qos.logback.core.util.FileUtil;
import com.change.demo002.utils.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.*;
=======
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
>>>>>>> f46b9a58044f8491f1d825c79481e3c2def6fdd2
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

/**
 * @Author: lijun
 * @Description:
 * @Date: Created in 下午3:55 18-2-8
 * @Modified By:
 */
<<<<<<< HEAD
@CrossOrigin
=======

>>>>>>> f46b9a58044f8491f1d825c79481e3c2def6fdd2
@Controller
public class ImageController {


    private static final Logger logger = LoggerFactory.getLogger(ImageController.class);

    /**
<<<<<<< HEAD
    * @Author: lijun
    * @Description: 实现文件上传
    */
    @CrossOrigin
    @PostMapping("/publishImg")
    public @ResponseBody String uploadImage(@RequestParam("file")MultipartFile file, HttpServletRequest request){
=======
    * @Author: Gaoyp
    * @Description: 实现文件上传
    */

    @PostMapping("/groundingImg")
    public @ResponseBody String uploadImage(@RequestParam("file")MultipartFile file,
                                            HttpServletRequest request){
>>>>>>> f46b9a58044f8491f1d825c79481e3c2def6fdd2


        String contentType = file.getContentType();

        String fileName = file.getOriginalFilename();

<<<<<<< HEAD
        String filePath = request.getSession().getServletContext().getRealPath("/ServiceImage/");

        System.out.println(contentType);
        System.out.println(filePath);
        System.out.println(fileName);
=======
        String filePath = request.getSession().getServletContext().getRealPath("/");


>>>>>>> f46b9a58044f8491f1d825c79481e3c2def6fdd2
        try {
            FileUtils.uploadFile(file.getBytes(), filePath, fileName);
        } catch (Exception e) {
            // TODO: handle exception
        }
        //返回json
<<<<<<< HEAD
        return (filePath+fileName);
=======
        return "uploadimg success";
>>>>>>> f46b9a58044f8491f1d825c79481e3c2def6fdd2

    }


}
