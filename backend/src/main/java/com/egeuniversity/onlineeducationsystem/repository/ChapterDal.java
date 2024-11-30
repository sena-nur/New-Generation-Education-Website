package com.egeuniversity.onlineeducationsystem.repository;

import com.egeuniversity.onlineeducationsystem.data.Chapter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ChapterDal extends JpaRepository<Chapter, String>, JpaSpecificationExecutor<Chapter> {


}
