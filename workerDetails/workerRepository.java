package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Worker;

@Repository
public interface WorkerRepository extends JpaRepository<Worker,Integer>{
}