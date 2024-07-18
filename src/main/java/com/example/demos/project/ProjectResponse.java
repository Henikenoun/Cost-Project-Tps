package com.example.demos.project;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProjectResponse {

    private Integer id;
    private String name;
    private String description;
    private String CreatedBy;
    private String type;
    private Date created_At;
    private Integer budget;
    private String status;
    private String location;

}
