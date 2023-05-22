-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: k8a806.p.ssafy.io    Database: ssafy806_payment
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `balance_state`
--

DROP TABLE IF EXISTS `balance_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `balance_state` (
  `balance_state_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) DEFAULT NULL,
  `modified_date` datetime(6) DEFAULT NULL,
  `concert_id` bigint NOT NULL,
  `customer` bigint NOT NULL,
  `proceed` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`balance_state_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `balance_state`
--

LOCK TABLES `balance_state` WRITE;
/*!40000 ALTER TABLE `balance_state` DISABLE KEYS */;
INSERT INTO `balance_state` VALUES (1,'2023-05-15 15:19:06.000000','2023-05-15 15:19:07.000000',213,123,1234,12),(2,'2023-05-15 15:19:12.000000','2023-05-15 15:19:07.000000',123,123123,32451345,23),(3,'2023-05-15 15:19:09.000000','2023-05-15 15:19:09.000000',34,1231,4534534,23),(4,'2023-05-15 15:19:11.000000','2023-05-15 15:19:13.000000',546,46,45345,12),(5,'2023-05-15 15:19:14.000000','2023-05-15 15:19:13.000000',777,1414,3453463,4),(6,'2023-05-15 15:19:15.000000','2023-05-15 15:19:16.000000',778,56778,346344,42),(7,'2023-05-15 15:19:16.000000','2023-05-15 15:19:17.000000',7888,869,3434,14),(8,'2023-05-15 15:19:20.000000','2023-05-15 15:19:18.000000',9976,23456,3636,34),(9,'2023-05-15 15:19:19.000000','2023-05-15 15:19:20.000000',45646,34534,3636363,45),(10,'2023-05-15 15:19:22.000000','2023-05-15 15:19:23.000000',3423,234235,7634565,65),(11,'2023-05-15 15:19:21.000000','2023-05-15 15:19:23.000000',23425,234,324234,76),(12,'2023-05-15 15:19:24.000000','2023-05-15 15:19:25.000000',45,463463,234235235,34),(13,'2023-05-15 15:19:26.000000','2023-05-15 15:19:26.000000',234,13425,4234,454),(14,'2023-05-15 15:19:27.000000','2023-05-15 15:19:29.000000',667,12314,23523,65),(15,'2023-05-15 15:19:28.000000','2023-05-15 15:19:30.000000',12345,12314,1341,12),(16,'2023-05-15 15:19:28.000000','2023-05-15 15:19:31.000000',1245,24352465,42352,123),(17,'2023-05-17 13:47:51.742315','2023-05-17 13:47:51.742315',9,104,10400,1);
/*!40000 ALTER TABLE `balance_state` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19  9:34:11