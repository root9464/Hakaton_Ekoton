package models

type Picture struct {
	ID   int    `json:"id" gorm:"type:uuid;primary_key;autoIncrement"`
	Data []byte `gorm:"type:bytea"`
	Name string `gorm:"type:varchar(255)"`
}
