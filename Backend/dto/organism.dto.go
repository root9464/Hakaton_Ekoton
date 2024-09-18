package dto

type OrganismFull struct {
	Name        string   `json:"name" valid:"required~Name is required,stringlength(1|100)~Name length must be between 1 and 100 characters"`
	Title       string   `json:"title" valid:"required~Title is required,stringlength(1|100)~Title length must be between 1 and 100 characters"`
	Photos      []string `json:"photos" valid:"required~Photos are required"`
	Description string   `json:"description" valid:"required~Description is required"`
	Geo         string   `json:"geo" valid:"required~Geo is required,stringlength(1|100)~Geo length must be between 1 and 100 characters"`
	Lifestyle   string   `json:"lifestyle" valid:"required~Lifestyle is required"`
	Appearance  string   `json:"appearance" valid:"required~Appearance is required"`
	Facts       []string `json:"facts" valid:"required~Facts are required"`
}

type OrganismShort struct {
	ID     int    `json:"id"`
	Name   string `json:"name"`
	Title  string `json:"title"`
	Photos string `json:"photos"`
}
