package com.allback.cygibatch.batch;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import lombok.RequiredArgsConstructor;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BatchJobRunner implements ApplicationRunner {
    private final JobLauncher jobLauncher;
    private final Job batchJob;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        LocalDate now = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        String formattedDate = now.format(formatter);
//        JobParameters jobParameters = new JobParametersBuilder()
//            .addString("name", formattedDate)
//            .toJobParameters();
        JobParameters jobParameters = new JobParametersBuilder()
            .addString("name", "5")
            .toJobParameters();
        JobExecution jobExecution = jobLauncher.run(batchJob, jobParameters);
        BatchStatus status = jobExecution.getStatus();
        System.out.println("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
        System.out.println(status);
        System.out.println(formattedDate);
        System.out.println("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    }
}
