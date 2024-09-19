package models

type Role string

const (
	ADMIN Role = "admin"
	USER  Role = "user"
)

type User struct {
	ID         int    `json:"id" gorm:"type:uuid;primary_key;autoIncrement"`
	Firstname  string `json:"firstname" gorm:"type:varchar(100)"`
	Lastname   string `json:"lastname" gorm:"type:varchar(100)"`
	Patronymic string `json:"patronymic" gorm:"type:varchar(100)"`
	Login      string `json:"login" gorm:"type:varchar(100);unique"`
	Password   string `json:"password" gorm:"type:varchar(100)"`
	Role       string `json:"role" gorm:"type:varchar(50)"`
}
