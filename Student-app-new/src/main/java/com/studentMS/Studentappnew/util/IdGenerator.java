package com.studentMS.Studentappnew.util;

import org.springframework.stereotype.Component;

import java.util.Random;
@Component
public class IdGenerator {
    private final static String Char="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    public String GenerateId(int length,String prefix){
        StringBuilder stringBuilder=new StringBuilder();
        stringBuilder.append(prefix);
        for(int i=0;i<length;i++){
            stringBuilder.append(Char.charAt(new Random().nextInt(61)));
        }
        return stringBuilder.toString();
    }
    
}
