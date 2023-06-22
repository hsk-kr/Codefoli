package com.codefolio.backend.user;

import jakarta.persistence.*;
import lombok.*;

@Table
@Entity
@Getter
@Setter
@EqualsAndHashCode
@ToString
@NoArgsConstructor
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @Column(unique = true)
    private String email;
    private String password;
    private String company;
    private String location;
    @Column(columnDefinition = "TEXT")
    private String about;
    private String profession;
    private String gitHubId;

    @Enumerated(EnumType.STRING)
    private RoleType role;

    public Users(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = RoleType.NEWBIE;
    }

    public Users(String name, String email, String password, String company, String location, String about){
        this.name = name;
        this.email = email;
        this.password = password;
        this.company = company;
        this.location = location;
        this.about = about;
        this.role = RoleType.NEWBIE;
    }
}
