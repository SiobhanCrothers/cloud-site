---
templateKey: doc
title: What are common access control models?
date: 2023-09-01T21:04:00.682Z
tags:
  - question
---

## Common Access Control Types: A CISSP Perspective

### Discretionary Access Control (DAC)

**Definition:** In DAC, the owner of the resource decides who can access it and what permissions they have.

**Benefits:**
- **Flexibility:** Owners have the discretion to grant or deny permissions as they see fit.
- **Ease of Use:** Simple to implement and understand in environments with fewer security requirements.

### Mandatory Access Control (MAC)

**Definition:** MAC uses labels (often representing classification levels) attached to both users and resources. Access decisions are made based on those labels.

**Benefits:**
- **High Security:** Often used in environments that require a high level of security, like military systems.
- **Standardized Access:** Access is determined by system-wide policies, not individual users.

### Role-Based Access Control (RBAC)

**Definition:** In RBAC, users are assigned to roles, and roles have permissions associated with them. Users inherit the permissions of their roles.

**Benefits:**
- **Simplicity:** Easier to manage and audit than individual permissions for each user.
- **Scalability:** Easily scales with organizational growth or changes.

### Attribute-Based Access Control (ABAC)

**Definition:** ABAC uses policies to grant access based on attributes of the user, the resource, and environmental factors.

**Benefits:**
- **Fine-Grained Control:** Allows for complex access control decisions based on multiple attributes.
- **Dynamic:** Can adapt to changing contexts or situations.

### Rule-Based Access Control

**Definition:** Uses specific rules that are set by a system or network administrator to determine access.

**Benefits:**
- **Explicit Conditions:** Clear conditions must be met for access to be granted.
- **Customizable:** Rules can be tailored to specific needs and scenarios.

### Policy-Based Access Control (PBAC)

**Definition:** PBAC uses centralized policies to define and manage access controls. These policies are more abstract and can encompass user attributes, resources, operations, and even environmental conditions.

**Benefits:**
- **Centralized Management:** Policies are managed centrally, simplifying updates and ensuring consistency.
- **Adaptive:** Policies can be quickly adjusted to address new requirements or threats.
- **Comprehensive:** Can factor in a wide range of conditions and contexts to make access decisions.

### Importance in Information Security

- **Protecting Assets:** Access controls are fundamental in ensuring only authorized individuals can access or modify assets.
- **Auditability:** Proper access control allows for clear tracking and auditing of who accessed what and when.
- **Regulatory Compliance:** Many regulations mandate specific access control measures to ensure data protection and privacy.
- **Operational Integrity:** By controlling who can access and modify systems and data, access controls help maintain the operational integrity of an organization.

